/************************************************************************************
  This is your background code.
  For more information please visit our wiki site:
  http://docs.crossrider.com/#!/guide/background_scope
*************************************************************************************/


// Place your code here (ideal for handling browser button, global timers, etc.)

appAPI.contextMenu.add("key1", "Check", function (data) {
	var dbData=appAPI.db.get('course_Data');
	
	for(i=0;i<dbData.length;i++)
	{
		for(j=i+1;j<dbData.length;j++)
		{
			
			if(dbData[i]['days']===dbData[j]['days'])
			{
			
				if((dbData[j]['startTime'] >= dbData[i]['startTime']) && (dbData[j]['startTime'] <= dbData[i]['endTime']))
				{
					alert(dbData[i]['title']+" conflicts with "+dbData[j]['title']);					
				}
							
			}
		}
		
	}
      	
}, ["all"]);
/*
appAPI.contextMenu.add("key2", "Add", function (data) {
	var key=0;
	alert('hi'+data.selectedText);
	
	alert("1");	
    var tableRow = $("td").filter(function() {
    			return $(this).text() == data.selectedText;
			}).closest("tr");

    alert("1");			
	alert(tableRow+'sds');
			if(tableRow===null)
			{
				alert("Please select proper text so that course can be selected, this would title or coursenumber");
				return;
				
			}	
			var title=tableRow.find('td').eq(7).text();
			var days=tableRow.find('td').eq(8).text();
			var time=tableRow.find('td').eq(9).text();
			timeSplit=time.split('-');
			var startTime,endTime;
			startTime=getTime(timeSplit[0]);           
			endTime=getTime(timeSplit[1]);
			var loc=tableRow.find('td').eq(10).text();
			var instructor=tableRow.find('td').eq(12).text();
			
			key=key+1;
			courseData=[{'id':key,'title':title,'days':days,'startTime':startTime,'endTime':endTime,'loc':loc,'instructor':instructor}];
			
			var dbData=appAPI.db.get('course_Data');
			if(dbData===null)
			{
				dbData=courseData;
			}
			else
			{
			  dbData.push({'id':key,'title':title,'days':days,'startTime':startTime,'endTime':endTime,'loc':loc,'instructor':instructor});
			}
			alert(dbData[key-1]['title']);
			appAPI.db.set('course_Data',dbData);
	   
	  
}, ["all"]);

*/