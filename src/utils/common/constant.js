export const AccountFile = 'accountInfo';
export const KeyStoreFile = 'keystoreInfo';
export const TxInfoFile = 'txInfo';
export const ContractABIFile = 'contractABI';
export const ContractNameFile = 'contractName';

export const PublicKeyPrefix = '0x04';
export const ChainIdPrefix = 'ChainId-';

/* 交易状态：
* 1: 发送失败：无需更新
* 2：发送成功，但尚未执行：需更新
* 3：发送成功，执行成功：需检查是否被回滚
* 4：发送成功，执行失败：需检查是否被回滚
* 5：内部交易成功：需检查是否被回滚
* 6：内部交易失败：需检查是否被回滚
*/
export const TxStatus = { SendError:1, NotExecute:2, ExecuteSuccess:3, ExecuteFail:4, InnerSuccess:5, InnerFail:6 };

/* 区块状态：
    * 1: 可逆：   1   //初始默认的状态值
    * 2：不可逆   0
    * 3：被回滚  -1
*/
export const BlockStatus = { Rollbacked: -1, Irreversible: 0, Reversible: 1, Unknown: 2 };