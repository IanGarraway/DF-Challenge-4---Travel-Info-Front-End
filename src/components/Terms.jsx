import { Modal } from "react-bootstrap";

const Terms = () => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Terms and Conditions
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos atque et at, aliquam voluptatibus harum laboriosam impedit dolores repellendus numquam quod. Doloremque accusamus enim fugit, asperiores magnam quibusdam provident! Facilis harum, ipsa, ea laudantium repudiandae dolor est necessitatibus, voluptas suscipit laboriosam quisquam et facere vel? Iusto tenetur in eum voluptatibus molestias ex, odit expedita facilis nulla inventore velit. Ea ullam error nulla repudiandae repellendus reiciendis non pariatur autem ex voluptatum harum, incidunt saepe expedita aperiam quasi quam optio? Molestias dignissimos doloremque doloribus. Necessitatibus, natus numquam. Laborum distinctio voluptate veniam, cupiditate aliquid nisi corporis, autem possimus voluptatibus earum cum facere minus animi accusantium. Corporis provident ex quibusdam minus obcaecati quae adipisci laboriosam. Cupiditate, laborum. Quae iusto suscipit minima odit sunt! Consequatur accusantium hic, corrupti pariatur numquam quasi nemo? Perspiciatis dicta ab magnam fuga vel perferendis voluptas reiciendis non nulla ex, voluptatem modi dolores dolorum quas iste expedita, architecto mollitia saepe optio incidunt sit reprehenderit labore. Libero fugit accusantium, perspiciatis cumque voluptatibus illo nobis consequatur? Sed praesentium a dolores impedit aut earum dolor error fugiat odit quibusdam explicabo adipisci, magnam quas eligendi, exercitationem, officiis provident ratione saepe! Nam doloribus aliquam temporibus, assumenda delectus, necessitatibus maiores soluta nobis ut itaque eum exercitationem similique.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
            
    );
}