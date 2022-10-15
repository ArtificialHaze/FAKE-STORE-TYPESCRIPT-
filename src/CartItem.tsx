import { useGlobalContext } from "./ShoppingCartContext";
import storeItems from "./items.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "./utils";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useGlobalContext();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imageUrl}
        alt={item?.name}
        height="125px"
        width={"75px"}
        style={{ objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}
          {quantity > 1 && (
            <span style={{ fontSize: "0.5rem" }} className="text-muted">
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.5rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => {
          removeFromCart(item.id);
        }}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
