components.signalList = {
    props: ['signalId'],
    template: /*html*/`<span style="display: none;">{{valueRaw}}</span><span style="display: none;">{{valueEscalated}}</span>`,
    data() {
        return {
            valueRaw: valueRaw[this.signalId],
            valueEscalated: valueEscalated[this.signalId],
        }
    },
    updated () {
        if (typeof this.valueRaw !== 'undefined') {
            document.getElementById('signalRaw_' + this.signalId).innerHTML = this.valueRaw;
            document.getElementById('signalEscalated_' + this.signalId).innerHTML = parseFloat(this.valueEscalated).toFixed(2);
        }
    },
    mounted()
    {
        if (typeof this.valueRaw !== 'undefined') {
            document.getElementById('signalRaw_' + this.signalId).innerHTML = this.valueRaw;
            document.getElementById('signalEscalated_' + this.signalId).innerHTML = parseFloat(this.valueEscalated).toFixed(2);
        }
    }
};