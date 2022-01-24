

const onChange = (event, { setElements, setBgColor }, isEdge) => {
    setElements((els) =>
      els.map((e) => {
        if (isEdge(e) || e.id !== '1') {
          return e;
        }

        const color = event.target.value;

        setBgColor(color);

        return {
          ...e,
          data: {
            ...e.data,
            color,
          },
        };
      })
    );
};

export default onChange;