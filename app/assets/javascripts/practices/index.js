var PracticesController = Paloma.controller('Practices');

// Executes when Rails User#new is executed.
PracticesController.prototype.index = function() {
  
  
  var blue        = '#348fe2',
      blueLight   = '#5da5e8',
      blueDark    = '#1993E4',
      aqua        = '#49b6d6',
      aquaLight   = '#6dc5de',
      aquaDark    = '#3a92ab',
      green       = '#00acac',
      greenLight  = '#33bdbd',
      greenDark   = '#008a8a',
      orange      = '#f59c1a',
      orangeLight = '#f7b048',
      orangeDark  = '#c47d15',
      dark        = '#2d353c',
      grey        = '#b6c2c9',
      purple      = '#727cb6',
      purpleLight = '#8e96c5',
      purpleDark  = '#5b6392',
      red         = '#ff5b57';

  var handleMorrisLineChart = function () {
    var tax_data = [
      {"period": "2011 Q6", "licensed": 3269, "sorned": 618},
      {"period": "2011 Q5", "licensed": 3269, "sorned": 618},
      {"period": "2011 Q3", "licensed": 3407, "sorned": 660},
      {"period": "2011 Q2", "licensed": 3351, "sorned": 629},
      {"period": "2011 Q1", "licensed": 3269, "sorned": 618},
      {"period": "2010 Q4", "licensed": 3246, "sorned": 661},
      {"period": "2009 Q4", "licensed": 3171, "sorned": 676},
      {"period": "2008 Q4", "licensed": 3155, "sorned": 681},
      {"period": "2007 Q4", "licensed": 3226, "sorned": 620},
      {"period": "2006 Q4", "licensed": 3245, "sorned": null},
      {"period": "2005 Q4", "licensed": 3289, "sorned": null}
    ];
    Morris.Line({
      element: 'morris-line-chart',
      data: tax_data,
      xkey: 'period',
      ykeys: ['licensed', 'sorned'],
      labels: ['Licensed', 'Off the road'],
      resize: true,
      lineColors: [dark, blue]
    });
  };
      
  var handleMorrisAreaChart = function() {
    Morris.Area({
      element: 'morris-area-chart',
      data: [
          {period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647},
          {period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
          {period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
          {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
          {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
          {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
          {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
          {period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
          {period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
          {period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
      ],
      xkey: 'period',
      ykeys: ['iphone', 'ipad', 'itouch'],
      labels: ['iPhone', 'iPad', 'iPod Touch'],
      pointSize: 2,
      hideHover: 'auto',
      resize: true,
      lineColors: [red, orange, dark]
    });
  };

  handleMorrisLineChart();
  handleMorrisAreaChart();
};