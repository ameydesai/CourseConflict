  /************************************************************************************
  This is your Page Code. The appAPI.ready() code block will be executed on every page load.
  For more information please visit our docs site: http://docs.crossrider.com
*************************************************************************************/


function getTime(val)
{
	var time;
	var temp,temp1;
	if (val.indexOf('PM')!=-1)
	{
		    temp=val.split(':');
		    
       		temp1=parseInt(temp[0]);
        	if (temp1 < 12)
        	{
            	temp1=temp1+12;            
        	}
        	time=temp1.toString()+temp[1].substring(0,temp[1].indexOf('PM')-1);
		
	}
	else
	{
		temp=val.split(':');
		time=temp[0]+temp[1].substring(0,temp[1].indexOf('AM')-1);
	}
	return parseInt(time)
}
	 
appAPI.ready(function($) {
	
	 //alert(appAPI.isMatchPages("http://www.acs.utah.edu/uofu/stu/scheduling?*"));
	 if (!appAPI.isMatchPages("http://www.acs.utah.edu/uofu/stu/scheduling?*")) 
	 	return;
	 appAPI.db.removeAll();
	 appAPI.selectedText(function(text, event) {
   
   			 var tableRow = $("td").filter(function() {
    			return $(this).text() == text;
			}).closest("tr");

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
			
			appAPI.db.set('course_Data',dbData);
        });
	 


});
