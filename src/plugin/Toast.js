import Swal from "sweetalert2"

function Toast() {
        const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
        })
        return Toast
}
export default Toast