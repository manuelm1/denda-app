import { Layout, EmptyState, Page } from "@shopify/polaris";
import CreateCarrier from "../components/CreateCarrier";

class Index extends React.Component {
  render() {
    return (
      <Page>
        <Layout>
          <EmptyState
            heading="Shipment by regions"
            action={{
              content: "Denda App"
            }}
            image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
          >
            <CreateCarrier />
          </EmptyState>
        </Layout>
      </Page>
    );
  }
}

export default Index;
