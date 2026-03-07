import Runtime "mo:core/Runtime";

actor {
  type Brand = {
    name : Text;
    tagline : Text;
    about : Text;
  };

  var isBrandInitialized = false;
  var brand : ?Brand = null;

  // Add or update brand information
  public shared ({ caller }) func addUpdateBrand(name : Text, tagline : Text, about : Text) : async () {
    let newBrand : Brand = {
      name;
      tagline;
      about;
    };
    if (isBrandInitialized) {
      brand := ?newBrand;
    } else {
      brand := ?newBrand;
      isBrandInitialized := true;
    };
  };

  // Get brand information
  public query ({ caller }) func getBrand() : async Brand {
    switch (brand) {
      case (null) { Runtime.trap("Brand does not exist.") };
      case (?brand) { brand };
    };
  };
};
