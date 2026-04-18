module {
  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : ?Text;
    service : Text;
    message : Text;
    timestamp : Int;
  };

  public type SubmitContactRequest = {
    name : Text;
    email : Text;
    phone : ?Text;
    service : Text;
    message : Text;
  };

  public type SubmitContactResult = {
    #ok : Nat;
    #err : Text;
  };
};
