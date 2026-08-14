import { expect, request,test } from "@playwright/test";

let apiContext :any;

test.beforeAll('Setting API Context',async({})=>{
  apiContext = await request.newContext({
  baseURL : 'https://evaabhijeet.agilecrm.com/',
  httpCredentials:{
    username : 'eva@abhi.com',
    password : 'abhieva'

  }
 });
});

 test('GET API Validation',async({})=>{
 const response = await apiContext.get('/dev/api/contacts/5361267507920896',{
  headers: { 'Accept': 'application/json' }
})
 const body = await response.json();
 const status =  await response.status();
// console.log(await response.text());
 console.log(status);

 console.log(body);
    
});

test('Post API Velidation',async ({request})=>{
const response = await apiContext.post('dev/api/contacts',{
  Headers:{'Accept':'application/json',
    'Content-Type': 'application/json'
  },
  data : {
    "star_value": "4",
    "lead_score": "92",
    "tags": [
        "Lead",
        "Likely Buyer"
    ],
    "properties": [
        {
            "type": "SYSTEM",
            "name": "first_name",
            "value": "Che"
        },
        {
            "type": "SYSTEM",
            "name": "last_name",
            "value": "Guevera"
        },
        {
            "type": "SYSTEM",
            "name": "email",
            "subtype": "Revelutionary",
            "value": "che@guevera.com"
        },
        {
            "type": "SYSTEM",
            "name": "address",
            "value": "{\"address\":\"225 George Street\",\"city\":\"NSW\",\"state\":\"Sydney\",\"zip\":\"2000\",\"country\":\"Argentina\"}"
        }
    ]
}

})

const body = await  response.json();
const status = await response.status();
console.log(body);
console.log(status);


});

test('PUT API Velidation',async({request})=>{
const response = await apiContext.put('dev/api/contacts/edit/lead-score',{
  headers:{'accept':'application/json',
    'Content-Type':'application/json'
  },
  data:{
  
    
    "id": "5361267507920896",
    "lead_score": 80

}
  
})
const body  = await response.json();
const status= await response.status();
console.log(body);
console.log(status);
});

test('PATCH API Velidation',async({request})=>{
 await apiContext.patch('',{
  headers:{'Accept':'application/json',
    'Content-Type':'application/json'
  },
  data:{

  }
 }) 
})