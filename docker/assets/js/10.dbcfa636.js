(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{197:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",[t._v("这里不会阐述Docker的详细安装过程，\n我们只针对centos linux 7系统做演示，\n如果你需要在其它的系统上安装Docker，请点击文档底部的官方教程链接。")])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("首次在新的主机上安装 Docker CE 之前，您需要设置 Docker 镜像仓库。然后，您可以从此镜像仓库安装和更新 Docker。")])]),t._v(" "),s("ol",[s("li",[t._v("安装所需的软件包。yum-utils 提供了 yum-config-manager 实用程序，并且 devicemapper 存储驱动需要 device-mapper-persistent-data 和 lvm2。")])]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo yum install -y yum-utils device-mapper-persistent-data lvm2\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("使用下列命令设置 stable 镜像仓库。您始终需要使用 stable 镜像仓库，即使您还需要通过 edge 或 testing 镜像仓库安装构建也是如此。这里给出的阿里云镜像源站。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum-config-manager \\\n     --add-repo \\\n     http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("更新 yum 软件包索引。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum makecache fast\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("安装最新版本的 Docker CE")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y docker-ce\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("启动 Docker")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start docker\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v("验证是否正确安装了 docker")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker version\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[t._v("完成")])]),t._v(" "),s("blockquote",[s("p",[t._v("Docker安装的坑很少，基本没有，所以良心产品+1")])]),t._v(" "),s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.docker-cn.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker 中文文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/centos/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker 官方英文 centos 安装指南 非常nice！"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://yq.aliyun.com/articles/110806",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用阿里云镜像源站可能会遇到一些坑，可以参考这篇文章（centos7）"),s("OutboundLink")],1)])]),t._v(" "),s("v-comment")],1)},[],!1,null,null,null);a.default=r.exports}}]);