Object.assign(global, {
    http: require('http'),
    fs: require('fs'),
    Transflect: require('@mixint/transflect'),
    PathRead: require('@mixint/pathread'),
    PathWrite: require('@mixint/PathWrite'),
    PathFork: require('@mixint/PathFork'),
    PathUnlink: require('@mixint/PathUnlink'),
})

http.createServer({
    IncomingMessage: require('parsedmessage'),
    ServerResponse: require('serverfailsoft')
}, (req,res) => (route => {
    req.pipe(new route).pipe(res)
})(
    req.method == 'GET'           ? PathRead   :
    req.method == 'PUT'           ? PathWrite  :
    req.method == 'POST'          ? PathFork   :
    req.method == 'DELETE'        ? PathUnlink :
    /* if no route ... */           Transflect
)).listen(3000)