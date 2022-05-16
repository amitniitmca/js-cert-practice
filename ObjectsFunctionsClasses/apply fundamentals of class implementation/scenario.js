class Course {
    constructor(title, timeRequired){
        this.title = title;
        this.timeRequired = timeRequired;
        this.topicList = [];
    }
    get topics() {
        return this.topicList; 
    }; 
    addTopics(topic) {
        this.topicList.push(topic); 
    }
};

class OrientationCourse extends Course{
    constructor(title, timeRequired){
        super(title, timeRequired);
        this.isRequired = true;
    }
};