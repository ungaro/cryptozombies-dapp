console.log("METAMASK JS LOADED");
let challenge = null;
let signature = null;
  if (web3) {
    console.log("web3");
  } else {
    alert("No web3 detected. Please install metamask");
  }

  $('.get').on('click', function () {
    $('.challenge').empty();
    $.get('http://localhost:3020/auth/' + web3.eth.accounts[0], (res) => {
      challenge = res
      console.log(res)
      res.forEach(line => {
        $('.challenge').append(line.name);
        $('.challenge').append('<br>');
        $('.challenge').append(line.value);
        $('.challenge').append('<br>');
      })
      const from = web3.eth.accounts[0];
      const params = [challenge, from];
      const method = 'eth_signTypedData';
      web3.currentProvider.sendAsync({
        method,
        params,
        from
      }, async (err, result) => {
        signature = result.result;
        if (err) {
          return console.error(err);
        }
        if (result.error) {
          return console.error(result.error);
        }
        console.log("SIGNATURE");
        console.log(signature);
      });
    });
  });


  $('.verify').on('click', function() {
    $.get('http://localhost:3001/auth/' + challenge[1].value + '/' + signature, (res) => {
      if (res === web3.eth.accounts[0]) {
        $('.success').show();
      } else {
        $('.fail').show();
      }
    });
  });
