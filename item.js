class item {
    constructor(id, nbt) {
        this.id = id
        this.nbt = nbt
    }
}
// nbt 구조와 json 간의 변형
// toString() - give 명령어 등에서 사용 가능한 값을 반환하도록
// setProperty() - nbt 값을 지정할 때 사용, 안전하게 지정할 수 있도록....