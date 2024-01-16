import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabins() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabins() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal((show) => !show)}>
//           <CreateCabinForm
//             onCloseModal={() => setIsOpenModal((show) => !show)}
//           />
//         </Modal>
//       )}
//       <Button onClick={() => setIsOpenModal((state) => !state)}>
//         {!isOpenModal ? "Add new cabin" : "Close Cabin form"}
//       </Button>
//     </>
//   );
// }

export default AddCabins;
