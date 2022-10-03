

export const queryParser=(url)=>{

        let queryString =  url.split('?')[1]
        let query = {};

        if (queryString) {
          queryString = queryString.split('#')[0];
          let arr = queryString.split('&');
      
          for (let i = 0; i < arr.length; i++) {
            let a = arr[i].split('=');
            let paramName = a[0];
            let paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();
      

            if (paramName.match(/\[(\d+)?\]$/)) {
    
              let key = paramName.replace(/\[(\d+)?\]/, '');
              if (!query[key]) query[key] = [];
      
              if (paramName.match(/\[\d+\]$/)) {
                let index = /\[(\d+)\]/.exec(paramName)[1];
                query[key][index] = paramValue;
              } else {
                
                query[key].push(paramValue);
              }
            } else {
             
              if (!query[paramName]) {
    
                query[paramName] = paramValue;
              } else if (query[paramName] && typeof query[paramName] === 'string'){
               
                query[paramName] = [query[paramName]];
                query[paramName].push(paramValue);
              } else {
            
                query[paramName].push(paramValue);
              }
            }
          }
        }
      
        return query;
      
}


const cryptoLiteParamsFactory=(url:string)=>{
  let params = "";

  for (let i =0; i < url.length; i++) {
    const character = url.charAt(i);
    if (character === ":") {
      let param = "";
      for (var j = i + 1; j < url.length; j++) {
        if (/\w/.test(url.charAt(j))) {
          param += url.charAt(j);
        } else {
          break;
        }
      }
      params += `(?<${param}>\\w+)`;
      i = j -1;
    } else {
      params += character;
    }
  }
  return params;
}



export const UrlParser=(req)=>{
   const url=decodeURI(req.url)
   req.query=queryParser(url)
}




