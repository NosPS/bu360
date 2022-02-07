


export const redirectToLink = function (type) {
   const fbUrl = process.env.FB_URL
    const igUrl = process.env.IG_URL
    const twUrl = process.env.TW_URL
    switch (type)
    {
      case "fb": window.open(fbUrl, '_blank') 
        break;
      case "ig": window.open(igUrl, '_blank') 
        break;
      case "tw": window.open(twUrl, '_blank') 
        break;
      default:
        break;
    }
}