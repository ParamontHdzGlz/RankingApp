
const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {

    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectionMiddle = [];
    const cellCollectionBottom = [];
    const cellCollectionWorst = [];

    function pushCellMarkupToArr(cellCollection, rankNum, rowLabel, labelClass) {
        if (rankNum > 0) {
            var item = items.find(o => o.ranking === rankNum);
            cellCollection.push(
            <div id={`rank-${rankNum}`} onDrop={drop} onDragOver={allowDrop} className="rank-cell">
                {(item != null)
                    ? <img id={`item-${item.id}`} src={imgArr.find(o => o.id === item.imageId)?.image} draggable="true" onDragStart={drag} />
                    : null}
            </div>);
        }
        else {
            cellCollection.push(
            <div className={`row-label ${labelClass}`}>
                <h4>{rowLabel}</h4>
            </div>
            );
        }
    }

    function createCellsForRow(rowNum) {
        var rankNum = 0;
        var currCollection = [];
        var label = "";
        var labelClass = "";
        const numCells = 5;

        for (var a = 1; a <= numCells; a++) {
            rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionTop;
                label = "S Tier";
                labelClass = "label-top-tier";
            }
            else if (rowNum === 2) {
                currCollection = cellCollectionMiddle;
                label = "A Tier";
                labelClass = "label-middle-tier";
            }
            else if (rowNum === 3) {
                currCollection = cellCollectionBottom;
                label = "B Tier";
                labelClass = "label-bottom-tier";
            }
            else if (rowNum === 4) {
                currCollection = cellCollectionWorst;
                label = "C Tier";
                labelClass = "label-worst-tier";
            }
            pushCellMarkupToArr(currCollection, rankNum, label, labelClass);

        }

    }

    function createCellsForRows() {
        const maxRows = 4;
        for (var row = 1; row <= maxRows; row++) {
            createCellsForRow(row);
        }
    }

    function createRowsForGrid() {

        rankingGrid.push(<div className="rank-row">{cellCollectionTop}</div>);
        rankingGrid.push(<div className="rank-row">{cellCollectionMiddle}</div>);
        rankingGrid.push(<div className="rank-row">{cellCollectionBottom}</div>);
        rankingGrid.push(<div className="rank-row">{cellCollectionWorst}</div>);

        return rankingGrid;
    }

    function createRankingGrid() {
        createCellsForRows();
        return createRowsForGrid();
    }

    return (
        <div className="rankings">
            {createRankingGrid()}
        </div>

    )

}
export default RankingGrid;