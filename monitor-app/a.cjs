const axios = require('axios');
const FormData = require('form-data');
let data = new FormData();
data.append('office_id', '148');
data.append('date_of_admission', '2024-02-03');
data.append('question_id', '56');
data.append('es_date', '');
data.append('es_time', '');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://eq.hsc.gov.ua/site/freetimes',
  headers: {
    'X-Csrf-Token': 'O6S_AlHbtNNr35iodJ3_BxTOOK_nGSf57aaIxfIYi8hc4eBaO7PlmQyuoPIkqrhOZa9Cx7FpTonfyuWJiFzE_g==',
    'X-Requested-With': 'XMLHttpRequest',
    'Referer': 'https://eq.hsc.gov.ua/site/step2?chdate=2024-01-30&question_id=56&id_es=',
    'Origin': 'https://eq.hsc.gov.ua',
    'Host': 'eq.hsc.gov.ua',
    'Cookie': '_ga=GA1.3.352398894.1703030813; _ga_HDMV3ZB43M=GS1.3.1703031635.1.0.1703031635.0.0.0; _gid=GA1.3.968613606.1706386093; _ga_3GVV2WPF7F=GS1.3.1706386093.2.0.1706386093.0.0.0; WEBCHSID2=h5nurush0o4m6vubv7bki66aen; _identity=a743abe93031b10611f1f5a6b2c2eb810afa7e1d2eac9cbebc9daf1b77861290a%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A20%3A%22%5B1485156%2Cnull%2C28800%5D%22%3B%7D; _csrf=45fede4465331d5506ebfa1111299989f732b8eb3ad50126411fdad76392cafea%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22gE_XjhQJgq8ZP7GIqazhVpip2lmLzDO6%22%3B%7D; WEBCHSID2=n0ev79i0t0n5utfvv2f01o4i9t; _csrf=ef241447fca5845f1a12bf8d9a9859fb08cd47e481644b754db12c82c320bf63a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22KR4EQNhnPzXvb3HuAyVF_mT0ykkTO3JF%22%3B%7D; _identity=a743abe93031b10611f1f5a6b2c2eb810afa7e1d2eac9cbebc9daf1b77861290a%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A20%3A%22%5B1485156%2Cnull%2C28800%5D%22%3B%7D',
    ...data.getHeaders()
  },
  data : data
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
