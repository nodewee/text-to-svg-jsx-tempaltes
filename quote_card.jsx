// Quote Card Template
<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    padding: '20px',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
  }}
>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '90%',
      maxWidth: '600px',
      minHeight: '200px',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(233, 132, 75, 0.15)',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#f8b195',
      color: '#61372b',
    }}
  >
    {/* Quote symbol */}
    <div style={{
      fontSize: '60px',
      opacity: '0.2',
      position: 'absolute',
      top: '15px',
      left: '20px',
      color: '#d95b43',
    }}>
      "
    </div>
    {/* Quote text */}
    <div
      contentEditable="true"
      style={{
        fontSize: '24px',
        lineHeight: '1.5',
        fontWeight: '500',
        marginBottom: '20px',
        marginLeft: '20px',
        textAlign: 'center',
        zIndex: '1',
      }}
    >
      The most heroic thing is to love life after seeing it clearly.
    </div>
    {/* Author */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
      }}
    >
      <span
        style={{
          width: '40px',
          height: '2px',
          background: '#d95b43',
          opacity: '0.8',
          marginRight: '10px',
        }}
      />
      <span
        contentEditable="true"
        style={{
          fontSize: '18px',
          fontWeight: '600',
        }}
      >
        Romain Rolland
      </span>
    </div>
  </div>
</div>