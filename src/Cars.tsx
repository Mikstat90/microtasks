type CarsPropsType = {
    tasks: TopCarsType[]
}

type TopCarsType = {
    manufacturer: string,
    model: string
}

export const Cars = (props: CarsPropsType) => {
    return (
        <table>
            <tbody>
            <tr>
                <th>Number</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {props.tasks.map((object, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{object.manufacturer}</td>
                        <td>{object.model}</td>
                    </tr>
                );
            })}

            </tbody>
        </table>
    );
}