let meetingRoom = {
    canReserve: true,
    capacity: 30,
    open: true, 
    reservable(prop) {
        return this[prop];
    },
    set available(value) {
        this.open = value;
    },
    get available(){
        return this.open && this.canReserve;
    }
};