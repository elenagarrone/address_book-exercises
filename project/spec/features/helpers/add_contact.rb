module AddContact

  def add_contact
    click_on 'Add contact'
    fill_in 'Name', with: 'Elena'
    fill_in 'Surname', with: 'Garrone'
    fill_in 'Email', with: 'lala@lal.com'
    fill_in 'Phone number', with: '0778242662'
    click_on 'Add'
  end

end
