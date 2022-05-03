function solution1(enroll, referral, seller, amount) {
  const sellerAmount = {};
  for (let i = 0; i < enroll.length; i++) {
    sellerAmount[enroll[i]] = 0;
  }

  function dfs(name, price) {
    if (name === "-") return;
    sellerAmount[name] += price;
    const price10Off = Math.floor(price * 0.1);
    sellerAmount[name] -= price10Off;
    if (price10Off) dfs(referral[enroll.indexOf(name)], price10Off);
  }

  for (let i = 0; i < seller.length; i++) {
    dfs(seller[i], amount[i] * 100);
  }

  const result = [];
  for (const name in sellerAmount) {
    result[enroll.indexOf(name)] = sellerAmount[name];
  }
  return result;
}

function solution2(enroll, referral, seller, amount) {
  const sellerAmount = new Map();
  for (let i = 0; i < enroll.length; i++) {
    sellerAmount.set(enroll[i], { parents: referral[i], sales: 0 });
  }

  for (let i = 0; i < seller.length; i++) {
    let name = seller[i];
    let price = amount[i] * 100;

    while (true) {
      const { parents, sales } = sellerAmount.get(name);
      const price10Off = Math.floor(price * 0.1);
      sellerAmount.set(name, {
        parents: parents,
        sales: sales + price - price10Off,
      });

      if (parents === "-") break;
      if (!price10Off) break;
      name = parents;
      price = price10Off;
    }
  }

  const result = [];
  for (const [key, value] of sellerAmount) {
    result.push(value.sales);
  }
  return result;
}

console.log(
  solution1(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
console.log(
  solution2(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
