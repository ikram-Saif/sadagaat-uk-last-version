export function handleFormErrorMessage(e,message = '') {
    const {t} = this.props
   let message = ''
    if (e.target.value === '')
    
    message =  e.target.setCustomValidity(t('fill this field'))
    else
    message = e.target.setCustomValidity(message)
      

   return shortPercentage
   }