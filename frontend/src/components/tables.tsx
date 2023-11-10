export function BaseTable() {
    return (
    <table id="main-table">
        <tbody>
            <tr>
            <td>
                <ContentTable/>
            </td>
            </tr>
        </tbody>
    </table>
    );
}

function ContentTable() {
    return (
    <div>
        <table id="table1">
        <h1 id="table1_h1">
            Vector Calculator
        </h1>
        </table>
    </div>
    );
}