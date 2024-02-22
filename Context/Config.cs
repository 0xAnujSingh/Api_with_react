using Microsoft.Data.SqlClient;

namespace Api_with_React.Context
{
    public class Config
    {
        private readonly IConfiguration _Configuration;
        public Config(IConfiguration configuration)
        {
            _Configuration = configuration;
        }

        public SqlConnection connection => new SqlConnection(_Configuration.GetConnectionString("DealerConnection"));
    }
}
