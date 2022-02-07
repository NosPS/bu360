
export const getErrorMessage = function(code, message) {
   if (code === undefined)
      return "Error" 
   switch (code) {
      default:
         return 'Error: ' + (code.split('/')[1]).split('-').join(' ')
   }

}
