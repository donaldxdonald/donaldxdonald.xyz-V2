---
title: 用树莓派来做旁路由
date: 2022-06-11 14:16
---



## 前言

自从买了树莓派以来，基本上都是用来做旁路由用了，装过一下 Jellyfin 用作影音管理，但是又感觉太丑了点，感觉折腾下来还不如直接用移动硬盘（

主要是用 docker 安装 OpenWrt 使用，科学上网之余解锁下网易云（虽然现在不太经常用网易云了）。由于经常性重装树莓派 / OpenWrt，就打算写文章整理一下过程，免得过一段时间又到处找资料。

## 环境（参考）

硬件：树莓派 4b

系统：[Debian-Pi-Aarch64](https://github.com/openfans-community-offical/Debian-Pi-Aarch64)

OpenWrt 镜像：`registry.cn-shanghai.aliyuncs.com/suling/openwrt:rpi4`

## 步骤

> 由于本人用小米路由器，默认本地 ip 是 `192.168.31.x` ，因此配置都以这个为例子。
> 

### 开启网卡混杂模式

根据实际设备网卡替换命令中的网卡名 `eth0` 

```bash
$ sudo ip link set eth0 promisc on
```

### 创建 macvlan 网络

```bash
$ docker network create -d macvlan --subnet=192.168.31.0/24 --gateway=192.168.31.1 -o parent=eth0 macnet
```

可以通过 `docker network ls` 查看网络是否创建成功。

### 创建 docker 容器 （docker-compose）

为了方便，就使用 docker-compose 写好配置，以便下次使用，也将容器内的 network 用 volume 的方式配置，方便管理。

```yaml
version: "3"
services:
  openwrt:
    image: registry.cn-shanghai.aliyuncs.com/suling/openwrt:rpi4
    container_name: openwrt_compose
    restart: always
    privileged: true
    command: /sbin/init
    volumes:
      - ./data/network:/etc/config/network
networks:
  default:
    external:
      name: macnet
```

OpenWrt 容器的 network 配置主要修改 Lan 口部分：

```
config interface 'lan'
        option type 'bridge'
        option ifname 'eth0'
        option proto 'static'
        option netmask '255.255.255.0'
        option ip6assign '60'
        option ipaddr '192.168.31.111'
        option gateway '192.168.31.1'
        option dns '192.168.31.1'
```

配置 OpenWrt 的 ip 地址 `ipaddr` ，网关 `gateway` 和 DNS 

启动容器后，我们可以使用 `docker ps -a`命令查看当前运行的容器：

```bash
root in 🌐 raspbian in local/dockerCompose/openwrt 
❯ docker ps -a
CONTAINER ID        IMAGE                                                   COMMAND                  CREATED             STATUS              PORTS               NAMES
5592d9dbffd9        registry.cn-shanghai.aliyuncs.com/suling/openwrt:rpi4   "/sbin/init"             14 hours ago        Up 13 hours                             openwrt_compose
```

若容器运行信息`STATUS`列为 `UP`状态，则说明容器运行正常。

### 运行

浏览器输入刚才配置的 OpenWrt 的 ip 地址 `192.168.31.111` 即可进入 OpenWrt 管理页面。

默认账号：root

默认密码：password

## 使用

在 OpenWrt 中开启了 AdGuard 或者科学上网等其他服务的话，可以选择以下方式使用：

- 全局
  
    主路由器的网关和 DNS 设置为 OpenWrt 的 ip 地址 `192.168.31.111` ，那这样局域网中的其他设备连接都会来到 OpenWrt 中解析。
    
- 局部
  
    全局使用的话可能会因树莓派 / OpenWrt 的不稳定而导致网络体验不佳，特别是家里还有其他成员的时候，那这时候就只需要将个别需要使用这些服务的设备的 Wifi 配置为静态 ip 连接，同样地将网关和 DNS 设置为 OpenWrt 的 ip 地址 `192.168.31.111` 即可。
    

## 小调整

- 关闭 DHCP
  
    网络 - 接口 - LAN - 修改 - 基本设置 - 忽略此接口 (不在此接口提供DHCP服务)
    
- 宿主机网络修复
  
    运行了 OpenWrt 容器后，宿主机（树莓派）可能会无法正常连接网络，那这时只需要修改宿主机的 `/etc/network/interfaces` 以静态 ip 的方式连接即可修复。
    
    ```bash
    cp /etc/network/interfaces /etc/network/interfaces.bak # 备份文件
    vim /etc/network/interfaces # 使用 vim 编辑文件
    ```
    
    `/etc/network/interfaces` 配置：
    
    ```
    auto eth0
    iface eth0 inet manual
    
    auto macvlan
    iface macvlan inet static
      address 192.168.31.194
      netmask 255.255.255.0
      gateway 192.168.31.1
      dns-nameservers 192.168.31.1
      pre-up ip link add macvlan link eth0 type macvlan mode bridge
      post-down ip link del macvlan link eth0 type macvlan mode bridge
    ```
    
    **注意：** 树莓派设置了静态 ip 连接后，下次换其他路由器或者网络环境时需要提前将其修改回 DHCP，否则就连不上网络，无法通过 SSH 连接树莓派了，只能通过连接 HDMI 给树莓派本地修改网络配置了。



## 参考链接

1. [在Docker 中运行 OpenWrt 旁路网关](https://mlapp.cn/376.html?from=donaldxdonald)
2. [Docker下安装Openwrt](https://touchren.pub/2020/11/16/openwrt-in-docker?from=donaldxdonald)