var schrelays=[
['P1' ,[100,100],'1CLR',{'PT':'11','nml':'O','com':'L','dir':'D'},['2','1']],
['P1`',[200,120],'1CLL',{'PT':'CO','nml':'O','com':'L','dir':'D'},['2','1']],

['P2' ,[280,250],'1CLR',{'PT':'11','nml':'O','com':'L','dir':'D'},['2','1']],
['P2`',[400,270],'1CLL',{'PT':'CO','nml':'O','com':'L','dir':'D'},['2','1']],

['P3' ,[450,440],'1CLR',{'PT':'11','nml':'O','com':'L','dir':'D'},['2','1']],
['P3`',[560,460],'1CLL',{'PT':'CO','nml':'O','com':'L','dir':'D'},['2','1']],

['P4' ,[570,630],'1CLR',{'PT':'11','nml':'O','com':'L','dir':'D'},['2','1']],
['P4`',[690,650],'1CLL',{'PT':'CO','nml':'O','com':'L','dir':'D'},['2','1']],

['P5' ,[710,810],'1CLR',{'PT':'11','nml':'O','com':'L','dir':'D'},['2','1']],
['P5`',[830,830],'1CLL',{'PT':'CO','nml':'O','com':'L','dir':'D'},['2','1']],

['P6' ,[850,950],'1CLR',{'PT':'11','nml':'O','com':'L','dir':'D'},['2','1']],
['P6`',[970,950],'1CLL',{'PT':'11','nml':'O','com':'L','dir':'U'},['2','1']],

['P1`',[490,230],'NC',{'PT':'XF','com':'R','dir':'D'},['2T','3T','1T']],
['P2`',[640,250],'NC',{'PT':'XF','com':'R','dir':'D'},['4B','5B','3B']],
['P3`',[770,270],'NC',{'PT':'XF','com':'R','dir':'D'},['2T','3T','1T']],
['P4`',[900,300],'NC',{'PT':'XF','com':'R','dir':'D'},['2B','3B','1B']],
];
var schlinks=[
  "M180 180 h40",             //P1CC
  "M170 140 v10 h50",         //P1PC
  "M210 180 v40 h310 v10",    //P1CO
  
  "M570 250 h100",            //P1P2
  
  "M360 330 h60",             //P2CC
  "M350 290 v10 h70",         //P2PC
  "M390 330 v80 h130 v-140",  //P2CO

  "M720 270 h80",             //P2P3

  "M530 520 h50",             //P3CC
  "M520 480 v10 h60",         //P3PC
  "M560 520 v70 h110 v-300",  //P3CO

  "M850 290 h80 v10",         //P3P4
  
  "M650 710 h60",             //P4CC
  "M640 670 v10 h70",         //P4PC
  "M680 710 v60 h120 v-460",  //P4CO
                              
  "M790 890 h60",             //P5CC
  "M780 850 v10 h70",         //P5PC
  "M820 890 v50 h110 v-600",  //P5CO
  
  "M930 1030 h60",             //P6CC
  "M920 990 v10 h70",         //P6PC
  "M960 1030 v50 h120 v-140 h-40 v10",  //P6CO
];