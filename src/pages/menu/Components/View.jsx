const View = ({ data, onItemClick }) => {
  return (
    <div>
      <div>
        {data &&
          data.map((item) => {
            return (
              <div key={item._id}>
                {item.destination}
                {/* <span
                  onClick={() => {
                    onItemClick(item._id);
                  }}
                >
                  X
                </span> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default View;
