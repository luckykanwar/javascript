class Quiz{
	constructor(studentName, teacherName, subject, typeQuiz){
		this.studentName = studentName;
		this.teacherName = teacherName;
		this.subject = subject;
		this.totalMarks = 100;
		this.typeQuiz = typeQuiz;
		this.marksObtained = 0;
	}

	getStudentName(){
		return this.studentName;	
	}

	getTeacherName(){
		return this.teacherName;	
	}

	getTotalMarks(){
		return this.totalMarks;
	}

	getMarksObtained(){
		return this.marksObtained;
	}
}


class MCQuiz extends Quiz{
	constructor(studentName, teacherName, subject, typeQuiz){
		super(studentName, teacherName, subject, typeQuiz)			
		this.minimumCorrectQuestions = 7;
		this.totalQuestions = 10;
		this.questionsSolved = 0;
	}

	setQuestionsSolved(questionsSolved){
		this.questionsSolved = questionsSolved;
	}

	getMarksObtained(){
		return ((this.questionsSolved/this.totalQuestions) * this.totalMarks)
	} 
}

me = new MCQuiz("Nitin","Jia","DS", "MCQ")
me.setQuestionsSolved(8)
me.getMarksObtained()
