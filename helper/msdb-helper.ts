import DatabaseConfig from "../../config/db_config";
const sql = require("mssql/msnodesqlv8");




async function insertCandidate(jxId,jxName,reservedUsername,jrId,environment) {
  let query = `INSERT INTO dbo.JobsCreatedCandidates
           (JXID
		       ,JXName
           ,Used
           ,isCompleted
           ,Reviewed
           ,RUsername
           ,Username
           ,RoleId
           ,CSID
           ,ClientShortCode
           ,TestRemarks
           ,JRID
           ,Environment)
     VALUES
           ('`+jxId+`'
		       ,'`+jxName+`'
           ,'0'
           ,'0'
           ,'NA'
           ,'`+reservedUsername+`'
           ,'NA'
           ,'NA'
           ,'NA'
           ,'NA'
           ,NULL
           ,'`+jrId+`'
           ,'`+environment+`')`;

  let resultArray: string[] = [];
  const queryResult = await executeQuery(query);
  console.log('DBRESULT: ',queryResult)
//   resultArray.push(queryResult.recordset[0].Email)
//   resultArray.push(queryResult.recordset[0].Password)
  return true;
}

async function executeQuery(dbQuery){
    if (!dbQuery) throw Error(`Given query: ${dbQuery} is not valid`);
  
    const pool1 = new sql.ConnectionPool(DatabaseConfig.getDBConfig());
    const pool1Connect = pool1.connect();
    
    pool1.on("error", (err) => {
      throw err;
    });
    
    await pool1Connect; // ensures that the pool has been created
    
    try {
      const request = pool1.request(); // or: new sql.Request(pool1)
      const result = await request.query(dbQuery);
      pool1.close();
      return result;
    } catch (err) {
      throw err;
    }
}

export default { insertCandidate };
