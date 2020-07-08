const rest = {
	APIError:(code = 'internal:unknown_error',message = '')=>{ //restAPI错误处理
		
	},
	restify:(prefix = '/api/')=>{
		return async (ctx,next)=>{
			if(ctx.request.path.startsWith(prefix)){ //API请求
				ctx.rest = ({code=200,msg='操作成功',data=null}=null)=>{
					ctx.response.type = 'application/json';
					ctx.response.body = {code,data,msg};
				}
				try{
					await next();
				}catch(e){
					ctx.response.status = 400;
					ctx.response.type = 'application/json';
					ctx.response.body = {
						code:e.code || 'internal:unknow_error',
						message:e.message || ''
					}
				}
			} else {
				await next();
			}
		}
	}
}
module.exports = rest;