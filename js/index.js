let myChart,myChart1,myChart2,myChart3,myChart4;

let visitorArray=[{title:'year',v:'332000',p:'22000',o:'54400',d:'45000'},{title:'Month',v:'52000',p:'2100',o:'7400',d:'6500'},{title:'Weeks',v:'22430',p:'800',o:'1400',d:'700'},{title:'Day',v:'2000',p:'250',o:'700',d:'520'}];

let yrTable=[
  {title:'year',o_n:'#34567',name:'Micahel tchie',addr:'45 Shilling Rd-3',dte:'02/3/22',pt:'PhonePay',ps:'paid'},
  {title:'year',o_n:'#39567',name:'Dennis Ritchie',addr:'45 Shilling Rd-3',dte:'21/3/22',pt:'PayTm',ps:'failed'},
  {title:'year',o_n:'#34567',name:'Morris tang',addr:'45 Shilling Rd-3',dte:'22/3/22',pt:'COD',ps:'processing'},
  {title:'year',o_n:'#34367',name:'Mahesh Mehta',addr:'45 Shilling Rd-3',dte:'24/3/21',pt:'GooglePay',ps:'paid'},
  {title:'year',o_n:'#34567',name:'Nisha Singh',addr:'45 Shilling Rd-3',dte:'30/5/21',pt:'PhonePay',ps:'failed'},
  {title:'year',o_n:'#34067',name:'Danish Hassan',addr:'45 Shilling Rd-3',dte:'24/6/22',pt:'AmazonPay',ps:'processing'},
  {title:'year',o_n:'#11567',name:'Dennis Ritchie1',addr:'45 Shilling Rd-3',dte:'24/3/22',pt:'PhonePay',ps:'paid'},
  {title:'year',o_n:'#24563',name:'Dennis Ritchie2',addr:'45 Shilling Rd-3',dte:'24/3/22',pt:'PhonePay',ps:'failed'},
  {title:'year',o_n:'#34517',name:'Dennis Ritchie3',addr:'45 Shilling Rd-3',dte:'24/3/22',pt:'PhonePay',ps:'paid'},
  {title:'year',o_n:'#84527',name:'Miang Chang',addr:'45 Shilling Rd-3',dte:'04/3/22',pt:'PhonePay',ps:'failed'},
  {title:'year',o_n:'#94537',name:'Saul Gomez',addr:'45 Shilling Rd-3',dte:'28/7/22',pt:'PhonePay',ps:'paid'},
];

function addData(v,p,o,d,ele){
  const btns=document.querySelectorAll('.action_wrapper .option');
  for(const btn of btns){
    btn.classList.remove('active_option')
  }

  ele.classList.add('active_option')
  document.querySelector('tbody').innerHTML=`<tr class="p-3"><td scope="row">${v}</td><td>${p}</td><td>${o}</td><td>${d}</td></tr>`
}


function loadTable(n,n1){
  let arr=[];
  arr=yrTable.slice(n,n1);
  document.querySelector('.table_info').innerHTML=`<h6 class='fs1'>showing ${n+1} of ${n1} from ${yrTable.length} Entries</h6>`
  document.querySelector('.ord_table tbody').innerHTML='';
  arr.forEach((obj)=>{
      document.querySelector('.ord_table tbody').innerHTML+=`<tr><td scope='col'>${obj.o_n}</td>
      <td scope='col'>${obj.name}</td>
      <td scope='col'>${obj.addr}</td>
      <td scope='col'>${obj.dte}</td>
      <td scope='col'>${obj.pt}</td>
      <td scope='col' class=${obj.ps}><span class="text-white rounded">${obj.ps}</span></td>
      <td scope='col' class='${obj.ps}'><span class="text-white rounded">${obj.ps}</span></td></tr>`
  });
}

function pageLoad(n){
  let minVal=n*5;
  let maxVal=minVal+6;
  loadTable(minVal,maxVal);

};


visitorArray.forEach(obj=>{
  document.querySelector('.action_wrapper').innerHTML+=`<button class="border-0 bg-white px-1 lg-1 px-lg-2 mx-lg-2 option fs1" onclick="addData(${obj.v},${obj.p},${obj.o},${obj.d},this)">${obj.title}</button>`;
})

loadTable(0,6)
  
document.querySelector('.option').classList.add('active_option')
document.querySelector('tbody').innerHTML=`<tr class="p-3"><td scope="row">${visitorArray[0].v}</td><td>${visitorArray[0].p}</td><td>${visitorArray[0].o}</td><td>${visitorArray[0].d}</td></tr>`

var option1={
    chart: {
        height:'70%',
        width:'100%',
        type: 'line', 
        dropShadow: {
          enabled: true,
          top:5,
          left:0,
          blur:10,
          opacity:1,
          color: '#f7b731'
        },
        toolbar:{
          show:false,
        }
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors:'#f0932b',
        width: 2,
        dashArray: 0,      
    },  
      
      series: [{
        name: 'visitors in 1000s',
        data: [45,52,44,64,52,58,46,95,82,54,68,85]
      }],
      xaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
      axisTicks: {show:false},
        categories: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
      },
      yaxis:{
        axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
      },
      grid:{
        show:false,
        padding: {
            left:0,
            right:5,
          },
      }    
}

var chart1=new ApexCharts(document.querySelector("#g1"), option1);
chart1.render()

var option2={
    chart: {
        height:'70%',
        width:'100%',
        type: 'line', 
        dropShadow: {
          enabled: true,
          top:5,
          left:0,
          blur:10,
          opacity:1,
          color: '#8c7ae6'
        },
        toolbar:{
          show:false,
        }
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors:'#8c7ae6',
        width: 2,
        dashArray: 0,      
    },  
      
      series: [{
        name: 'Order in 1000s',
        data: [55,22,64,34,52,28,96,65,82,54,68,85]
      }],
      xaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
      axisTicks: {show:false},
        categories: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
      },
      yaxis:{
        axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
      },
      grid:{
        show:false,
        padding: {
            left:0,
            right:5,
          },
      }    
}

var chart2=new ApexCharts(document.querySelector("#g2"), option2);
chart2.render()

var option3={
    chart: {
        height:'70%',
        width:'100%',
        type: 'line', 
        dropShadow: {
          enabled: true,
          top:5,
          left:0,
          blur:10,
          opacity:1,
          color: '#10ac84'
        },
        toolbar:{
          show:false,
        }
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors:'#38ada9',
        width: 2,
        dashArray: 0,      
    },  
      
      series: [{
        name: 'Pending',
        data: [55,82,64,14,52,88,46,65,32,54,68,25]
      }],
      xaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
      axisTicks: {show:false},
        categories: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
      },
      yaxis:{
        axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
      },
      grid:{
        show:false,
        padding: {
            left:0,
            right:5,
          },
      }    
}

var chart3=new ApexCharts(document.querySelector("#g3"), option3);
chart3.render();

var option4={
    chart: {
        height:'80%',
        width:'100%',
        type: 'line', 
        dropShadow: {
          enabled: true,
          top:5,
          left:0,
          blur:8,
          opacity:0.8,
          color: '#b71540'
        },
        toolbar:{
          show:false,
        }
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors:'#b71540',
        width: 2,
        dashArray: 0,      
    },  
      
      series: [{
        name: 'Pending',
        data: [25,82,44,14,92,88,46,35,82,34,78,35]
      }],
      xaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
      axisTicks: {show:false},
        categories: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
      },
      yaxis:{
        axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
      },
      grid:{
        show:false,
        padding: {
            left:0,
            right:5,
          },
      }    
}

var chart4=new ApexCharts(document.querySelector("#g4"), option4);
chart4.render()

function createDonut1(arr,txt){
  if(myChart1){
    myChart1.destroy();
    myChart2.destroy();
  }
  let ctx1=document.getElementById('p1').getContext('2d');
myChart1=new Chart(ctx1,{
  type: 'doughnut',
   data:{
    labels: [
      'Red',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data:arr,
      backgroundColor: [
        '#38ada9',
        'rgba(0,0,0,0)',
      ],
      hoverOffset: 4
    }]
   },
   options:{
    plugins:{
      legend: {
       display: false
      }
     },
    cutout:'90%',
    elements: {
      arc: {
          borderWidth: 0
      }
  }
   },
   plugins: [{
    id: 'text',
    beforeDraw: function(chart, a, b) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;

      ctx.restore();
      var fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";

      var text =txt,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  }]
})


let ctx2=document.getElementById('p2').getContext('2d');
myChart2=new Chart(ctx2,{
  type: 'doughnut',
  data:{
    labels: [
      'Target','To Achieve'
    ],
    datasets: [{
      data:arr,
      backgroundColor: [
        '#38ada9',
        '#dfe4ea'
      ],
      hoverOffset: 2
    }]
  },
  options:{
    plugins:{
      legend: {
       display: false
      }
     },
    cutout:'95%',
    elements: {
      arc: {
          borderWidth: 0
      }
  }
  }
})
}


function createDonut2(var1,var2){
  if(myChart3){
  
    myChart3.destroy();
    myChart4.destroy();
  }

  let ctx3=document.getElementById('e1').getContext('2d');
 myChart3=new Chart(ctx3,{
  type: 'doughnut',
   data:{
    labels: [
      'Red',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data:var1,
      backgroundColor: [
        '#f7b731',
        'rgba(0,0,0,0)',
      ],
      hoverOffset: 4
    }]
   },
   options:{
    plugins:{
      legend: {
       display: false
      }
     },
    cutout:'60%',
    elements: {
      arc: {
          borderWidth: 0
      }
  }
   },
})


let ctx4=document.getElementById('e2').getContext('2d');
myChart4=new Chart(ctx4,{
  type: 'doughnut',
  data:{
    labels: [
      'Profit','Loss','Others','Margins'
    ],
    datasets: [{
      data:var2,
      backgroundColor: [
        '#f7b731',
        '#ff5e57',
        '#38ada9',
        '#9c88ff'
      ],
      hoverOffset: 2
    }]
  },
  options:{
    plugins:{
      legend: {
       display: false
      }
     },
    cutout:'80%',
    elements: {
      arc: {
          borderWidth: 0
      }
  }
  }
})
}


function createBar(var1,var2){
  if(myChart){
    myChart.destroy();
  }
  let ctx5=document.getElementById('b1').getContext('2d');
 myChart = new Chart(ctx5, {
  type: 'bar',
  data: {
      labels: ['Mon','Tue','Wed','Thu','Fri','Sat'],
      datasets: [{
          label:'Loss',
          data:var1,
          backgroundColor: '#ff5e57',
          borderRadius:10,
          barPercentage: 0.9,
          categoryPercentage:0.4,
      },
      {
        label: 'Profit',
        data:var2,
        backgroundColor:'#38ada9',
        borderRadius:10,
        barPercentage: 0.9,
        categoryPercentage:0.4,
    },

    ],
  },
  options: {

     scales: {
       x:{
           grid:{
             display:false
           }
       },
      y: {
         display: false,
      }
   },

}
});

}

createDonut1([67,33],'67%');
createDonut2([45,55],[45,15,18,22]);
createBar([12,8, 3, 5, 3, 9],[3, 19, 10, 15, 10, 7]);






