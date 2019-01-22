import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_CARRIER = gql`
  mutation fulfillmentServiceCreate($name: String!) {
    fulfillmentServiceCreate(name: $name) {
      userErrors {
        field
        message
      }
      fulfillmentService {
        id
      }
    }
  }
`;

const CreateCarrier = () => {
  let input;

  return (
    <Mutation mutation={CREATE_CARRIER}>
      {(fulfillmentServiceCreate, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              fulfillmentServiceCreate({
                variables: {
                  name: input.value
                }
              });
              input.value = "";
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit">Create Carrier</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default CreateCarrier;
