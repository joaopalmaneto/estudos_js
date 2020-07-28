// a sintaxe para class funciona do mesmo modo

var Subject = function(){
    this.subscribers = [];
}

Subject.prototype = {
    subscribe: function(callback){
        this.subscribers.push(callback)
    },

    unsubscribe: function(fn){
        this.subscribers.filter(obs => obs !== fn)
    },

    notify: function(data){
        this.subscribers.forEach(fn => fn(data))
    }
}

observer1 = function(data){
    console.log(`notified ${data}`)
}

observable = new Subject();
observable.subscribe(observer1);
observable.notify(1);
