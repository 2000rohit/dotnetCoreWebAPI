using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class UserStoreDatabaseSettings: IUserStoreDatabaseSettings
    {
        public string UserCollectionDetail { get; set; } = string.Empty;
        public string UsersAppCon { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;
    }
}
