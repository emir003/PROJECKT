import { useParams } from "react-router-dom";
import { fetchClub } from "../store/actions/club";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Club() {
  let { club_id } = useParams();

  const dispatch = useDispatch();

  const { clubs, loading } = useSelector((state) => state.club);

  useEffect(() => {
    dispatch(fetchClub(club_id));
  }, [club_id, dispatch]);

  return (
    <>
      <h3> Клуб № {club_id}</h3>
      {loading ? (
        <h2>LOADING</h2>
      ) : (
        <>
          <p>{clubs.computer_club}</p>

          {clubs.club_computer_club.map((club) => {
            return (
              <>
                <div className="container_club">
                  <h4>Бронь клуба</h4>
                </div>
                <Form>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Computer_club:</Form.Label>
                    <Form.Control as="select" custom>
                      {clubs.club_computer_club.map((branch) => {
                        return (
                          <option>
                            {branch.club} - {branch.address},
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>
                </Form>
                <Form.Group controlId="formGridState">
                  <h3>Места</h3>
                  <Form.Control as="select" defaultValue="Choose...">
                    {club.club_table.map((table) => {
                      return <option>{table.place_number}</option>;
                    })}
                  </Form.Control>
                </Form.Group>

                <h3>Игры:</h3>
                {club.game_list.map((game) => {
                  return <div>{game.game}</div>;
                })}
               <Button variant="danger">Сохранить</Button>
              </>
            );
          })}
        </>
      )}
    </>
  );
}
