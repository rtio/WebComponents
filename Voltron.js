(function(root, $){
    
    // regex em cache para separar chaves para `delegate`
    var delegateEventSpliter = /^(\S+)\s*(.*)$/;
    
    // construtor
    function Voltron(options){
        this.init(options);
        return this;
    }
    
    // Opções default
    Voltron.prototype.defaults = {};
    
    // hash events
    Voltron.prototype.events = {};
    
    // Código de inicialização
    Voltron.prototype.init = function(options){
        this.options = $.extend({}, this.defaults, options);
        this.$el = $(options.$el);
        this.bind();
        return this;
    };
    
    // Vincula usando delegação de evento
    Voltron.prototype.bind = function(){
        var events = this.options.events ? Voltron.result(this.options.events) : null;
        if(!events){
            return this;
        }
        
        // Impede dupla vinculação de ventos
        this.unbind();
        
        // Percorre hash events
        for(var key in events){
            var method = events[key];
            // Se o valor não é uma função 
            // TODO
        }
        
    };
    

    
})();