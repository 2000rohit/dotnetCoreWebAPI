using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public interface IUserStoreDatabaseSettings
    {
        string UserCollectionDetail { get; set; }
        string UsersAppCon { get; set; }
        string DatabaseName { get; set; }
    }
}
