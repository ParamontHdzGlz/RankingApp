
const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {

    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectionMiddle = [];
    const cellCollectionBottom = [];
    const cellCollectionWorst = [];

    function pushCellMarkupToArr(cellCollection, rankNum) {
        if (rankNum > 0) {
            var item = items.find(o => o.ranking === rankNum);
            cellCollection.push(
            <div id={`rank-${rankNum}`} onDrop={drop} onDragOver={allowDrop} className="rank-cell">
                {(item != null)
                    ? <img id={`item-${item.id}`} src={imgArr.find(o => o.id === item.imageId)?.image} draggable="true" onDragStart={drag} />
                    : null}
            </div>);
        }
    }

    function createCellsForRow(rowNum) {
        var rankNum = 0;
        var currCollection = [];
        const numCells = 8;

        for (var a = 1; a <= numCells; a++) {
            rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionTop;
            }
            else if (rowNum === 2) {
                currCollection = cellCollectionMiddle;
            }
            else if (rowNum === 3) {
                currCollection = cellCollectionBottom;
            }
            else if (rowNum === 4) {
                currCollection = cellCollectionWorst;
            }
            pushCellMarkupToArr(currCollection, rankNum);

        }

    }

    function createCellsForRows() {
        const maxRows = 4;
        for (var row = 1; row <= maxRows; row++) {
            createCellsForRow(row);
        }
    }

    function createRowsForGrid() {

        rankingGrid.push(
            <div className="parent-row" >
                <div className="tier-label label-top-tier">"S Tier"</div>
                <div className="rank-row">{cellCollectionTop}</div>
            </div>);
        rankingGrid.push(
            <div className="parent-row" >
                <div className="tier-label label-middle-tier">"A Tier"</div>
                <div className="rank-row">{cellCollectionMiddle}</div>
            </div>);
        rankingGrid.push(
            <div className="parent-row" >
                <div className="tier-label label-bottom-tier">"B Tier"</div>
                <div className="rank-row">{cellCollectionBottom}</div>
            </div>);
        rankingGrid.push(
            <div className="parent-row" >
                <div className="tier-label label-worst-tier">"C Tier"</div>
                <div className="rank-row">{cellCollectionWorst}</div>
            </div>);


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