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
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {props.tasks.map((object, index) => {
                return (
                    <tr>
                        <td>{object.manufacturer}</td>
                        <td>{object.model}</td>
                    </tr>
                );
            })}
        </table>
    );
}