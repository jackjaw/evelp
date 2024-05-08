const zh = {
  message: {
    header: {
      menu: "菜单",
      home: "主页",
      serverName: "宁静",
      market: "吉他",
      serenity: "国服",
    },
    corporation: {
      placeholder: "请选择或输入公司",
    },
    dialog: {
      title: "配置",
      materialPrice: "材料价格",
      materialPlaceholder: "请选择类型",
      productPrice: "产品价格",
      productPlaceholder: "请选择类型",
      scope: "加权价格",
      scopePlaceholder: "请选择取价时间段",
      days: "交易日期",
      daysPlaceholder: "请选择交易时间段",
      tax: "交易税",
      week: "一周",
      month: "一月",
      season: "三月",
      buyPrice: "买价",
      sellPrice: "卖价",
      reset: "重置",
      close: "关闭",
      dataTitle: "数据",
      quickbarTitle: "快捷栏",
      sourceList: "所有公司",
      targetList: "快捷栏",
      desc: {
        title: "说明",
        dataDesc: "配置说明",
        tableDesc: "表格说明",
        claim: "声明",
        blueprint: "蓝图",
        materialContent: "所有材料(兑换材料，蓝图材料)的价格类型",
        productPriceContent: "所有LP商店物品的价格类型",
        scopeContent: "所有物品的价格计算，已过滤低价且量大的订单，卖价和买价取价格最低或最高的前x%数量的价格平均值",
        daysContent: "表格中(日均)交易量为交易日期内总交易量的平均值",
        taxContent: "收入和利润取该比率的税后值",
        costContent: "所有材料(兑换材料，蓝图材料)的总价",
        incomeContent: "物品价格乘以数量的税后价格",
        volumeContent: "交易日期内交易量的日平均值",
        saleIndexContent: "这个值是为了展示易卖且LP比例高的物品，由三项指标得分相乘所得:物品日均交易总额，日均交易量和LP比例",
        unitProfitContent: "单位LP点的税后ISK利润",
        blueprintContent: "表格和订单中的蓝图价格按照蓝图产品来计算",
        claimContent: "EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide. "+
        "All other trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos "+
        "and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, "+
        "world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf."
      },
    },
    table: {
      name: "物品",
      quantity: "数量",
      lpCost: "LP成本",
      iskCost: "ISK成本",
      cost: "材料成本",
      price: "单价",
      income: "收入",
      profit: "利润",
      volume: "交易量",
      saleIndex: "出货指数",
      unitProfit: "LP比例",
      lookUp: "物品搜索",
      orders: "订单",
      operation: "操作",
      error: "错误",
      material: {
        lpStoreMaterail: "兑换材料",
        bluePrintMaterial: "制造材料",
        name: "物品",
        quantity: "数量",
        price: "单价",
        type: "类型",
        cost: "成本",
        error: "错误",
        copy: "复制",
        copySuccess: "复制成功!",
        copyFail: "复制失败!",
        sum: "合计",
      },
    },
    order: {
      sellOrder: "卖单",
      buyOrder: "买单",
      history: "历史",
      orderId: "订单号",
      systemName: "星系",
      volume: "数量",
      price: "价格",
      unitProfit: "LP比例",
      expiration: "过期时间",
      lastUpdated: "上次更新",
    },
    statis: {
      lpRange: "LP比例范围",
      number: "数量",
      cost: "成本",
      income: "收入",
      profit: "利润",
      aveLpPrice: "平均LP比例",
      unitProfit: "LP比例",
    },
    stock: {
      average: "日平均价",
      minAndmax: "最低/最高",
      average5d: "移动平均线(5天)",
      average20d: "移动平均线(20天)",
      minAndmax5d: "最低/最高(5天)",
      volume: "交易量",
      price: "价格",
      rangeSelector: {
        month: "月",
        threeMonths: "季度",
        halfYear: "半年",
        yearToDay: "YTD",
        year: "年",
        all: "所有",
      },
    },
    err: {
      produceBuy:"未能成功获取 <b>$1</b> 的买价",
      productSell:"未能成功获取 <b>$1</b> 的卖价",
      materialBuy:"未能成功获取制造材料 <b>纯超强型撞击感增效体</b> 的买价",
      materialSell:"未能成功获取制造材料 <b>纯超强型撞击感增效体</b> 的卖价",
      requirementBuy:"未能成功获取兑换材料 <b>$1</b> 的买价",
      requirementSell:"未能成功获取兑换材料 <b>$1</b> 的卖价",
      buyOrder:"市场上没有买单",
      sellOrder:"市场上没有卖单",
      order:"市场上没有任何订单"
    },
  },
};

export default zh;
