export const HOME = {
  TIPS: {
    EMAIL_ILLEGAL: "请输入合法的邮箱地址!",
    EMAIL_IS_EMPTY: "邮箱地址不能为空!"
  },
  VIEW: {
    TYPECONTENT: ["欢迎来到 Ben  ", "花费很少的时间分享日程安排  "],
    BTN: {
      icon: "mdi-at",
      word: "免 费 注 册",
      height: "70",
      placeholder: "请输入你的邮箱"
    },
    CONTENT: {
      p1: [
        "什么是Ben?",
        "Ben 是个Sass多租户的项目管理平台, 你只需要快速注册自己的管理员账号就可以轻松安排Team人员之间的任务排班流程"
      ],
      p2: [
        "为什么选择Ben?",
        "Ben 可以在你发布任务,排班的同时一键精确推送给员工,这样极大的提升了工作安排效率"
      ],
      p3: [
        "怎么使用？",
        " Ben 的易用性会让这一切变得十分容易，只需要轻轻点击鼠标就可以实现项目管理和人员调度"
      ],
      p4: ["多平台支持", "Ben 支持多设备使用,我们目前支持包括浏览器,安卓手机"]
    }
  }
};

export const PRICE = {
  VIEW: {
    TITLE: "计划和价格",
    CARD: [
      {
        icon: {
          colors: "green",
          data: "mdi-cloud-check"
        },
        title: "免费使用",
        price: "Free",
        content: [
          "创建你的项目的时间表,单账户可管理最多5个Team",
          "分享时间表给Team中的成员",
          "单个Team最多可以有10人"
        ],
        button: "免 费 注 册",
        className: "d-table-cell"
      },
      {
        icon: {
          color: "black",
          data: "mdi-star-circle"
        },
        title: "Plus +",
        price: "¥ 6.66/月",
        content: [
          "我们目前正在开发的一些更强大的功能",
          "不限Team的数量",
          "单个Team上限1000人"
        ],
        button: "Coming Soon",
        className: "d-table-cell",
        isDisabled: true
      }
    ]
  }
};

export const SUPPORT = {
  VIEW: {
    btn: {
      icon: "mdi-arrow-left",
      word: "返 回"
    },
    title: "欢迎使用Ben.支持",
    icon: "mdi-cursor-default-click",
    iconColor: "white",
    content: "mdi-chevron-double-down",
    contents: [
      {
        title: "我们支持两大平台"
      },
      {
        icon: "mdi-monitor-cellphone",
        title: "Web",
        content: "在浏览器中输入网址即可访问"
      },
      { icon: "mdi-android-debug-bridge", title: "安卓App", btn: "立即下载" }
    ],
    content1: ["忘记密码了?", "忘记密码了, 没关系"],
    content2: [
      "为什么页面样式视图混乱? 显示功能无法正常使用?",
      "我们目前对Chrome,Firefox支持良好,我们也建议您用这些浏览器打开以确保正常使用, 详情请参考下列浏览器支持表"
    ],
    content3: [
      "联系我们",
      "如果有特殊疑问,请发送邮件到ben_k8s@163.com邮箱,我们会尽快与您取得联系"
    ],
    supp_list: [
      {
        icon: "mdi-google-chrome",
        color: "red",
        icon2: "mdi-check-circle",
        color2: "green",
        supp: "Chromium (Chrome, Edge Insider)"
      },
      {
        icon: "mdi-firefox",
        color: "orange",
        icon2: "mdi-check-circle",
        color2: "green",
        supp: "Firefox"
      },
      {
        icon: "mdi-edge",
        color: "cyan darken-2",
        icon2: "mdi-check-circle",
        color2: "green",
        supp: "Edge"
      },
      {
        icon: "mdi-apple-safari",
        color: "blue",

        icon2: "mdi-check-circle",
        color2: "green",
        supp: "Safari 10 +"
      },
      {
        icon: " mdi-edge-legacy",
        color: "blue",

        icon2: "mdi-check-circle",
        color2: "green",
        supp: "IE11 +"
      },
      {
        icon: " mdi-internet-explorer",
        color: "",
        icon2: "mdi-close-circle",
        color2: "red",
        supp: "IE9 / IE10"
      }
    ]
  }
};

export const LOGIN = {
  VIEW: {
    btn: {
      icon: "mdi-arrow-left",
      word: "返 回"
    },
    subtitle: " 花费很少的时间分享日程安排"
  }
};

export const SIGNUP = {
  VIEW: {
    subtitle: "创建你的线上账号来分享你的时间安排给你的团队",
    word1: "已经有账号了? ",
    btn: {
      icon: "mdi-arrow-left",
      word: "返 回"
    }
  }
};
