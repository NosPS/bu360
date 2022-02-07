import { Alert } from 'react-bootstrap';

export default function AlertMessage(props) {

   return (
      <div style={{
         position: 'absolute',
         minWidth: '50%',
         maxWidth: '50%',
         bottom: '50px',
         left: '0',
         right: '0',
         marginLeft: 'auto',
         marginRight: 'auto',
         zIndex: 9
      }}>
         <Alert key={props.key} variant={props.variant} onClose={ props.onclose } dismissible>
            {props.children}
         </Alert>
      </div>
   )
   
}