ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: "449680715194557",
      loginStyle: "popup",
      secret: "ef02aa21feb14c9ca21248feb752a563"
    }
  }
);

ServiceConfiguration.configurations.upsert(
  { service: "twitter" },
  {
    $set: {
      consumerKey: "7uynG3Z0m1eb26b1OagDu2ERp",
      loginStyle: "popup",
      secret: "cM7GBsjdRwOclGQBEBtX67pgWPnhuAdlTaRwHUVvuRvoaO7KN0"
    }
  }
);

ServiceConfiguration.configurations.upsert(
  { service: "linkedin" },
  {
    $set: {
      clientId: "75hhz6dcndjtuc",
      loginStyle: "popup",
      secret: "TAxDpH9McCBnfrxo"
    }
  }
);