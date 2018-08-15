class Issues{
	constructor(){
		this.issue_id = 1;
		this.issue_description = "";
		this.issue_severity = "Low";
		this.issue_assigned_to = "";
		this.issue_status = "Open";
	}

	saveIssue(){
		var allIssues = [];
		this.issue_description = document.getElementById('issueDescInput');
		this.issue_assigned_to =  document.getElementById('issueAssignedToInput');
		this.issue_severity =  document.getElementById('issueSeverityInput');
		var issue = new Issues()
		allIssues.push(issue);
      	var issue1 = new Issues()
		allIssues.push(issue1);
		localStorage.setItem('Issues', JSON.stringify(allIssues));
		//fetchIssues()
		//document.getElementById("issueInputForm").reset();
	}
	
	fetchIssues(){
		var issues = []
		//localStorage.setItem('Issues', JSON.stringify(issues));
		var allIssues = JSON.parse(localStorage.getItem('Issues'));
		for (var issue of allIssues){
			console.log(issue);
		}
	}
}

test = new Issues()
test.saveIssue()
test.fetchIssues()